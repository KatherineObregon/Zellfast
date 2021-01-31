import React from 'react'
import "../css/Home.css"

function HomePageProductView() {
    return (
       <React.Fragment>
           <div className="container mb-5" style={{marginTop: "-200px"}}>
      {/* <!-- Prouct Row Starts --> */}
      <div className="row">
        <div className="col-lg-3">
          <div className="card my-2 my-lg-0">
            <div className="card-body d-flex justify-content-center">
              <a href="#"><img src="assets/img/product_images/sport.png" alt="product image 01" className="category_image" /></a>
            </div>
            <div className="card-footer bg-transparent py-0">
              <div className="row my-1">
                <div className="col-md-12 center">
                  <p className="font-weight-bold text-danger ">
                   Deportes
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card my-2 my-lg-0">
            <div className="card-body d-flex justify-content-center">
              <a href="#"><img src="assets/img/product_images/desktop.png" alt="product image 01" className="category_image"/></a>
            </div>
            <div className="card-footer bg-transparent py-0">
              <div className="row my-1">
                <div className="col-md-12">
                  <p className="font-weight-bold text-danger center">
                  Computación
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card my-2 my-lg-0">
            <div className="card-body d-flex justify-content-center">
              <a href="#"><img src="assets/img/product_images/smartphone.png" alt="product image 01" className="category_image"/></a>
            </div>
            <div className="card-footer bg-transparent py-0">
              <div className="row my-1">
                <div className="col-md-12">
                  <p className="font-weight-bold text-danger center">
                     Celulares
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card my-2 my-lg-0">
            <div className="card-body d-flex justify-content-center">
              <a href="#"><img src="assets/img/product_images/game-console.png" alt="product image 01" className="category_image"/></a>
            </div>
            <div className="card-footer bg-transparent py-0">
              <div className="row my-1">
                <div className="col-md-12">
                  <p className="font-weight-bold text-danger center">
                   Videojuegos y Consolas
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* <!-- Prouct Row Ends --> */}


      {/* <!-- Prouct Row Starts --> */}
      <div className="row mt-md-4 mt-0">
        <div className="col-lg-3">
          <div className="card my-2 my-lg-0">
            <div className="card-body d-flex justify-content-center">
              <a href="#"><img src="assets/img/product_images/tshirt.png" alt="product image 01" className="category_image"/></a>
            </div>
            <div className="card-footer bg-transparent py-0">
              <div className="row my-1">
                <div className="col-md-12">
                  <p className="font-weight-bold text-danger center">
                    Ropa
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card my-2 my-lg-0">
            <div className="card-body d-flex justify-content-center">
              <a href="#"><img src="assets/img/product_images/car.png" alt="product image 01" className="category_image"/></a>
            </div>
            <div className="card-footer bg-transparent py-0">
              <div className="row my-1">
                <div className="col-md-12">
                  <p className="font-weight-bold text-danger center">
                   Autos y partes
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card my-2 my-lg-0">
            <div className="card-body d-flex justify-content-center">
              <a href="#"><img src="assets/img/product_images/foot.png" alt="product image 01" className="category_image"/></a>
            </div>
            <div className="card-footer bg-transparent py-0">
              <div className="row my-1">
                <div className="col-md-12">
                  <p className="font-weight-bold text-danger center">
                    Mascotas
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card my-2 my-lg-0">
            <div className="card-body d-flex justify-content-center">
              <a href="#"><img src="assets/img/product_images/camara.png" alt="product image 01" className="category_image"/></a>
            </div>
            <div className="card-footer bg-transparent py-0">
              <div className="row my-1">
                <div className="col-md-12">
                  <p className="font-weight-bold text-danger center">
                   Camara, Audio y Video
                  </p>
                </div>
   
              </div>
            </div>
          </div>
        </div>
      </div> 
      {/* <!-- Prouct Row Ends --> */}
    </div>
    

       </React.Fragment>
    )
}
export default  HomePageProductView;