export default async function beforeEach(to, from, next) {
    document.title = `${to.name} | Aprendendo Vue`
    next()
}