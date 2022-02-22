const addComment = async (event) => {
    event.preventDefault();

    const comment_content = document.querySelector("#input-comment").value.trim();
    const id = document.querySelector(".comment-form").getAttribute("data-id")
    console.log(id)

    if (comment_content) {
        const response = await fetch(`/api/comments/${id}`, {
            method: "POST",
            body: JSON.stringify({ comment_content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to login.");
        }
    }
};

document.querySelector(".comment-form").addEventListener("submit", addComment);
