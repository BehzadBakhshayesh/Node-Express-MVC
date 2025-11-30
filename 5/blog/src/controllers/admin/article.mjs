class ArticleController {
    list(req, res) {
        return res.render("admin/article/list",
            {
                title: "Article list",
                articles: [{ id: 1, title: 'Article1' }, { id: 2, title: 'Article2' }]
            })
    }

    get(req, res) {
        const article = {
            id: 1,
            title: "Article",
            text: "sdadaaasdasda"
        }

        return res.render("admin/article/detail", {
            title: article.title,
            article,
        });
    }

    create(req, res) {
        return res.render("admin/article/create", {
            title: "Create new Article",
        });
    }

    add(req, res) {
        console.log("bodyyyyyyyyyyyyyyyyyyyyyy", req.body);

        return res.redirect("/admin/article")
    }
}

export default new ArticleController()