<template>
    <html>


      <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-login">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-6">
                <a href="#" class="active" id="login-form-link" @click="submitLogin" ref="mybutton">Ajouter</a>
              </div>
              <div class="col-xs-6">
              </div>
            </div>
            <hr>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-12">
                <form id="login-form" action="#" ref="loginform" method="post" role="form" style="display: block;">
                  <div class="form-group">
                    <label for="name_product">Name Product</label>
                    <input type="text" name="name_product" id="name_product" tabindex="1" class="form-control" placeholder="Name Product" value="">
                  </div>
                  <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" name="description" id="description" tabindex="2" class="form-control" placeholder="Description">
                  </div>
                    <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" name="price" id="price" tabindex="3" class="form-control" placeholder="price">
                  </div>
                <div class="form-group">
                    <label for="Stock">Stock</label>
                    <input type="text" name="stock" id="stock" tabindex="3" class="form-control" placeholder="stock">
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="login-submit" id="login-submit" style="background-color: #2d92a9"   tabindex="4" class="form-control btn btn-login" value="ADD">
                      </div>
                   </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


<div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-login">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-6">
                <a href="#"  id="login-form-link">Suppression</a>
              </div>
              <div class="col-xs-6">
              </div>
            </div>
            <hr>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-12">
                <form id="login-form" action="#" ref="loginform" method="post" role="form" style="display: block;">
                  <div class="form-group">
                    <label for="name_product">Name Product</label>
                    <input type="text" name="name_product" id="name_product" tabindex="1" class="form-control" placeholder="Name Product" value="">
                  </div>
                  <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" name="description" id="description" tabindex="2" class="form-control" placeholder="Description">
                  </div>
                    <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" name="price" id="price" tabindex="3" class="form-control" placeholder="price">
                  </div>
                <div class="form-group">
                    <label for="Stock">Stock</label>
                    <input type="text" name="stock" id="stock" tabindex="3" class="form-control" placeholder="stock">
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="login-submit" id="login-submit" style="background-color: #2d92a9"   tabindex="4" class="form-control btn btn-login" value="DELETE">
                      </div>
                   </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</html>
</template>