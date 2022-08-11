// POST NEW ARTICLE

fetch('/api/articles', { method: "POST", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, body: JSON.stringify({ title: "black pink", content: "bp" }) }).then(res => res.json()).then(data => console.log(data));

// UPDATE ARTICLE

fetch('/api/articles/4', { method: "PUT", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, body: JSON.stringify({ title: "black pink11", content: "bp11" }) }).then(res => res.json()).then(data => console.log(data));

// DELETE ARTICLE

fetch('/api/articles/4', { method: "DELETE", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, }).then(res => res.json()).then(data => console.log(data));

// POST NEW COMMENT

fetch('/api/comments', { method: "POST", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, body: JSON.stringify({ article_id: 1, content: "bp" }) }).then(res => res.json()).then(data => console.log(data));

// UPDATE COMMENT

fetch('/api/comments/4', { method: "PUT", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, body: JSON.stringify({ article_id: 1, content: "bp11" }) }).then(res => res.json()).then(data => console.log(data));

// DELETE COMMENT

fetch('/api/comments/4', { method: "DELETE", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "jwgGFHVu-Z4UTh1A4pm4ED0seV2fl4bK0NUE" }, }).then(res => res.json()).then(data => console.log(data));

// POST IMAGE

fetch('/api/images', { method: "POST", headers: { "Content-Type": "application/json", "XSRF-TOKEN": "vMYWgnym-VAxKHI18ZDVlB-tWVVGuU2YO9gY" }, body: JSON.stringify({ img_url: "https://images6.alphacoders.com/604/604153.jpg", article_id: 34 }) }).then(res => res.json()).then(data => console.log(data));