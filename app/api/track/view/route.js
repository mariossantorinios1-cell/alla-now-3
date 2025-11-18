export async function POST(req){ const body = await req.json(); // local - front end also saves to localStorage
 try{ const arr = JSON.parse(localStorage.getItem('allnow_views')||'[]'); arr.push(body); localStorage.setItem('allnow_views', JSON.stringify(arr)); }catch(e){}
 return new Response(JSON.stringify({ ok:true }), { status:200 }) }
