const form = document.getElementById("blogForm");
const formStatus = document.getElementById("form-status");

const sendBlog = async(e) => {
    try {
        e.preventDefault();
        const author = form.author.value;
        const title = form.title.value;
        const body = form.body.value;
        const category = form.category.value;
        const imgsrc = form.imgsrc.value;
        const datetime = new Date();
        if (!author || !title || !body || !imgsrc || !category) {
            throw "Please fill all the fields.";
        }
        const blog = {
            author,
            title,
            body,
            imgsrc,
            category,
            datetime



        };

        const res = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });

        const blogs = await res.json();
        if (blogs) {
            window.location.replace("./index.html");
        } else {
            throw "Blog not submitted.";
        }
    } catch (err) {
        formStatus.innerText = err.name ? err.message : err;
    }
};

form.addEventListener("submit", sendBlog);