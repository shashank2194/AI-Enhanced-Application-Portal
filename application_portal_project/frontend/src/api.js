export async function fetchApplication(id){
  return (await fetch(`/api/applications/${id}/`)).json();
}
export async function saveApplication(id,data){
  return (await fetch(`/api/applications/${id}/`,{
    method:"PUT",headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)
  })).json();
}
export async function submitApplication(id){
  return (await fetch(`/api/applications/${id}/submit/`,{method:"POST"})).json();
}