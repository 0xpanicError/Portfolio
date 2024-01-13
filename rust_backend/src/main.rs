use actix_web::{web, App, HttpServer};
use std::sync::Mutex;

pub struct ArticleScheme {
    id: i32,
    title: String,
}

pub struct AppState {
    pub articles: Mutex<ArticleScheme>,
}

async fn index(data: web::Data<AppState>) -> String {
    let mut article = data.articles.lock().unwrap();
    article.id += 1;
    format!("Article ID: {}, Title: {}", article.id, article.title)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let article = web::Data::new(AppState {
        articles: Mutex::new(ArticleScheme {
            id: 0,
            title: "Hello World".to_string(),
        }),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(article.clone())
            .route("/", web::get().to(index))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
