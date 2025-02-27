document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".vote").forEach(button => {
        button.addEventListener("click", (event) => {
            let scoreElem = event.target.parentElement.querySelector(".score");
            let currentScore = parseInt(scoreElem.innerText);

            if (event.target.classList.contains("upvote")) {
                scoreElem.innerText = currentScore + 1;
            } else if (event.target.classList.contains("downvote")) {
                scoreElem.innerText = currentScore - 1;
            }
        });
    });

    document.querySelector(".add-post").addEventListener("click", () => {
        const postContainer = document.querySelector(".content");
        const newPost = document.createElement("div");
        newPost.classList.add("post");
        newPost.innerHTML = `
            <div class="post-header">
                <span>👤 New User</span> | <span>Just now</span>
            </div>
            <p>This is a new post!</p>
            <div class="post-footer">
                <button class="vote upvote">⬆</button>
                <span class="score">0</span>
                <button class="vote downvote">⬇</button>
                <button class="comment-btn">💬 Comment</button>
            </div>
        `;
        postContainer.prepend(newPost);
    });
});
