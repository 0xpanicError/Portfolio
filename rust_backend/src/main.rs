use actix_web::{web, App, HttpServer};
use serde::{Deserialize, Serialize};
use std::clone::Clone;
use std::sync::Mutex;

#[derive(Clone, Debug)]
pub struct ArticleScheme {
    id: i32,
    title: String,
}

#[derive(Deserialize, Serialize)]
pub struct NewArticle {
    title: String,
}

pub struct AppState {
    pub articles: Mutex<Vec<ArticleScheme>>,
}

async fn index(data: web::Data<AppState>) -> String {
    let mut articles = data.articles.lock().unwrap();

    let new_article = ArticleScheme {
        id: (articles.len() + 1) as i32,
        title: format!("Article {}", articles.len() + 1),
    };

    articles.push(new_article.clone());
    format!("Articles: {:?}", articles)
}

async fn create_article(new_article: web::Json<NewArticle>, data: web::Data<AppState>) -> String {
    let mut articles = data.articles.lock().unwrap();

    let new_article = ArticleScheme {
        id: (articles.len() + 1) as i32,
        title: new_article.title.clone(),
    };
    articles.push(new_article);
    format!("Articles: {:?}", articles)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let app_state = web::Data::new(AppState {
        articles: Mutex::new(Vec::new()),
    });

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .route("/", web::get().to(index))
            .route("/create", web::post().to(create_article))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
