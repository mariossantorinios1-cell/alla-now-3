// Simple localStorage-based auth helpers
export function getUsers(){ try{ return JSON.parse(localStorage.getItem('allnow_users')||'[]') }catch(e){ return [] } }
export function saveUsers(u){ localStorage.setItem('allnow_users', JSON.stringify(u)) }
export function register({username,email,password}){
  const users = getUsers()
  if(users.find(x=>x.username===username || x.email===email)) return { error: 'User exists' }
  const user = { username, email, password, profile:{bio:'', avatar:''} }
  users.push(user); saveUsers(users); localStorage.setItem('allnow_user', JSON.stringify(user)); return { ok:true, user }
}
export function login({email,password}){
  const users = getUsers()
  const user = users.find(x=>x.email===email && x.password===password)
  if(!user) return { error: 'Invalid credentials' }
  localStorage.setItem('allnow_user', JSON.stringify(user)); return { ok:true, user }
}
export function logout(){ localStorage.removeItem('allnow_user') }
export function getCurrentUser(){ try{ return JSON.parse(localStorage.getItem('allnow_user')) }catch(e){ return null } }
