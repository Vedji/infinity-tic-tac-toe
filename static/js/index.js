let btn_add_lobby = document.getElementById("input-add-lobby");
btn_add_lobby.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("input-area-join").style.display = "none";
    let show_container = document.getElementById("input-area-create");
    show_container.style.display = "flex";
})
document.getElementById("input-area-create-btn-cancel").addEventListener("click", (e) => {
    e.preventDefault();
    let show_container = document.getElementById("input-area-create");
    show_container.style.display = "none";
});
document.getElementById("input-area-create-btn").addEventListener("click", (e) => {
    e.preventDefault();
    let lobby_name = document.getElementById("create-lobby-name");
    let username = document.getElementById("create-username");
    let msg_error = document.getElementById("input-area-create-msg-error");
    if (lobby_name.value === "") {
        msg_error.textContent = " Enter Lobby name! ";
        return false;
    }
    if (username.value === "") {
        msg_error.textContent = " Enter Username name! ";
        return false;
    }
    if (lobby_name.value.length > 31) {
        msg_error.textContent = " Enter Lobby name already so long! ";
        return false;
    }
    if (username.value.length > 31) {
        msg_error.textContent = " Enter Username already so long! ";
        return false;
    }
    msg_error.textContent = "";

    // create lobby to flask
});
document.getElementById("input-area-create-btn").addEventListener("click", (e) => {})

document.getElementById("input-area-join-btn-cancel").addEventListener("click", (e) => {
    e.preventDefault();
    let show_container = document.getElementById("input-area-join");
    show_container.style.display = "none";
});
document.getElementById("input-area-join-btn-goto").addEventListener("click", (e) => {
    let username = document.getElementById("join-username");
    let msg_error = document.getElementById("input-area-join-msg-error");

    if (username.value === "") {
        msg_error.textContent = " Enter Username name! ";
        return false;
    }
    if (username.value.length > 31) {
        msg_error.textContent = " Enter Username already so long! ";
        return false;
    }
    msg_error.textContent = "";
    // Join lobby in flask
})

const join_lobby_player = () => {

}

for (let item of document.getElementsByClassName("btn-join-lobby")){
    item.onclick = (ev) => {
        document.getElementById("input-area-create").style.display = "none";
        let show_container = document.getElementById("input-area-join");
        show_container.style.display = "flex";
    }
}