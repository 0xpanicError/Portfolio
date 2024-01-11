use actix_web::{post, web, App, HttpResponse, HttpServer, Responder};

struct ArticleScheme {
    id: i32,
    title: String,
    description: String,
    markdown: String,
    slug: String,
}

impl ArticleScheme {
    fn new(id: i32, title: String, description: String, markdown: String, slug: String) -> Self {
        Self {
            id,
            title,
            description,
            markdown,
            slug,
        }
    }
}

async fn greet() -> impl Responder {
    "Hello, world!"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let mut articles: Vec<ArticleScheme> = Vec::new();
    articles.push(ArticleScheme {
        id: 1,
        title: "AdvanceSolidity".to_string(),
        description: "answers to diffuclt questions".to_string(),
        markdown: "<h1> Hello World <h1>".to_string(),
        slug: "advsol".to_string(),
    });
    articles.push(ArticleScheme {
        id: 2,
        title: "FLockChain".to_string(),
        description: "federated learning on PoS".to_string(),
        markdown: "<h3> gay <h3>".to_string(),
        slug: "fedlayer".to_string(),
    });

    HttpServer::new(|| App::new().service(hello).route("/", web::get().to(greet)))
        .bind("127.0.0.1:8080")?
        .run()
        .await
}

#[post("/hello")]
async fn hello(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}
