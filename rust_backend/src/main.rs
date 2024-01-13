use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use serde::{Deserialize, Serialize};
use std::clone::Clone;
use std::sync::Mutex;

#[derive(Clone, Debug, Serialize)]
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

async fn get_article(data: web::Data<AppState>) -> impl Responder {
    let articles = data.articles.lock().unwrap();
    println!("Getting articles{:?}", articles);
    return HttpResponse::Ok().json(&*articles);
}

// async fn get_article_by_id(
//     article_id: web::Path<i32>,
//     data: web::Data<AppState>,
// ) -> impl Responder {
//     let articles = data.articles.lock().unwrap();
//     let article = articles
//         .iter()
//         .find(|&article| article.id == *article_id)
//         .unwrap();
//     println!("Getting article{:?}", article);
//     return HttpResponse::Ok().json(&article);
// }

async fn create_article(
    new_article: web::Json<NewArticle>,
    data: web::Data<AppState>,
) -> impl Responder {
    {
        let mut articles = data.articles.lock().unwrap();

        let new_article = ArticleScheme {
            id: (articles.len() + 1) as i32,
            title: new_article.title.clone(),
        };
        articles.push(new_article);
    }
    let articles = data.articles.lock().unwrap();
    println!("Creating articles{:?}", articles);
    return HttpResponse::Ok().json(&*articles);
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let app_state = web::Data::new(AppState {
        articles: Mutex::new(Vec::new()),
    });

    HttpServer::new(move || {
        App::new().app_data(app_state.clone()).service(
            web::scope("/articles")
                .route("/", web::get().to(get_article))
                .route("/create", web::post().to(create_article)),
        )
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
