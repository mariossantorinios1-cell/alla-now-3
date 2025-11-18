// Simple chat using localStorage
export function getMessages(){ try{ return JSON.parse(localStorage.getItem('allnow_messages')||'[]') }catch(e){ return [] } }
export function saveMessage(m){ const msgs = getMessages(); msgs.push(m); localStorage.setItem('allnow_messages', JSON.stringify(msgs)); return m }
