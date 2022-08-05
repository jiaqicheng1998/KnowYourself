// POST NEW ARTICLE

fetch('/api/articles', { method: "POST", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, body: JSON.stringify({ title: "black pink", content: "bp" }) }).then(res => res.json()).then(data => console.log(data));

// UPDATE ARTICLE

fetch('/api/articles/4', { method: "PUT", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, body: JSON.stringify({ title: "black pink11", content: "bp11" }) }).then(res => res.json()).then(data => console.log(data));

//DELETE ARTICLE

fetch('/api/articles/4', { method: "DELETE", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, }).then(res => res.json()).then(data => console.log(data));