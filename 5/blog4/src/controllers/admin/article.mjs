import { Article } from "../../models/article.mjs";
import { NotFoundError } from "../../utils/errors.mjs";

let articles = []

class ArticleController {
    async list(req, res) {

        const articles = await Article.findAll()

        return res.render("admin/article/list",
            {
                title: "Article list",
                articles: articles
            })
    }

    async get(req, res) {
        const { id } = req.params

        const article = await Article.findByPk(id)

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

    async add(req, res) {
        const { title, text } = req.body

        await Article.create({ title, text })

        return res.redirect("/admin/article")
    }

    async edit(req, res) {
        const { id } = req.params

        const article = await Article.findByPk(id)

        if (!article) {
            throw new NotFoundError("Article not found");
        }

        return res.render("admin/article/edit",
            {
                title: `Edit Article ${article.title}`,
                article,
            });
    }

    async update(req, res) {
        const { id } = req.params
        const { title, text, _method } = req.body

        const article = await Article.findByPk(id)

        if (!article) {
            throw new NotFoundError("Article not found");
        }

        article.title = title
        article.text = text

        await article.save()

        return res.redirect(`/admin/article/${article.id}`)
    }

    async delete(req, res) {
        const { id } = req.params

        const article = await Article.findByPk(id)

        if (!article) {
            throw new NotFoundError("Article not found");
        }

        await article.destroy()

        return res.redirect("/admin/article")
    }
}

export default new ArticleController()