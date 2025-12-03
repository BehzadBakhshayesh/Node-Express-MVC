import { NotFoundError } from "../../utils/errors.mjs";

let articles = []

class ArticleController {
    list(req, res) {
        return res.render("admin/article/list",
            {
                title: "Article list",
                articles: articles
            })
    }

    get(req, res) {
        const { id } = req.params

        const article = articles.find(i => i.id === +id)

        if (!article) {
            throw new NotFoundError("Article not found");
        }

        return res.render("admin/article/detail",
            {
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

        articles.push({ id: Date.now(), ...req.body })

        return res.redirect("/admin/article")
    }

    edit(req, res) {
        const { id } = req.params

        const article = articles.find(i => i.id === +id)

        if (!article) {
            throw new NotFoundError("Article not found");
        }

        return res.render("admin/article/edit",
            {
                title: `Edit Article ${article.title}`,
                article,
            });
    }

    update(req, res) {
        const { id } = req.params
        const { title, text, _method } = req.body

        const article = articles.find(i => i.id === +id)

        if (!article) {
            throw new NotFoundError("Article not found");
        }

        article.title = title
        article.text = text

        return res.redirect(`/admin/article/${article.id}`)
    }

    delete(req, res) {
        const { id } = req.params

        const article = articles.find(i => i.id === +id)
        if (!article) {
            throw new NotFoundError("Article not found");
        }

        articles = articles.filter(i => i.id !== +id)

        return res.redirect("/admin/article")
    }
}

export default new ArticleController()