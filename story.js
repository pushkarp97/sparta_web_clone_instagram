function renderStory() {
    fetch("https://picsum.photos/v2/list")
        .then(res => res.json()).then((data) => {
            for (let i = 0; i < 7; i++) {
                let user = data[i]['author']
                if (user.length > 9) {
                    user = user.substr(0, 8) + "..."
                }
                let img = data[i]['download_url']
                let temp_html = `<div><img src="${img}">${user}</div>`
                $('#story').append(temp_html);

            }

        })

}