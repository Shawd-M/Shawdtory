<template>
<html>

      <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-login">
          <div class="panel-heading">
            <div class="row">
              <div class="col-xs-6">
              </div>
              <div class="col-xs-6">
                <a href="#" id="register-form-link">Register</a>
              </div>
            </div>
            <hr>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-lg-12">

                <form id="register-form" action="/inscription" method="post" role="form">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="">
                  </div>
                  <div class="form-group">
                    <label for="lastname">Lastname</label>
                    <input type="text" name="lastname" id="lastname" tabindex="2" class="form-control" placeholder="Lastname">
                  </div>
                  <div class="form-group">
                    <label for="Objet">Objet</label>
                    <input type="text" name="Objet" id="password" tabindex="2" class="form-control" placeholder=" Objet">
                  </div>
                  <div class="form-group">
                    <label for="sexe">Sexe</label>
                    <input type="text" name="sexe" id="sexe" tabindex="2" class="form-control" placeholder=" Sexe">
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 col-sm-offset-3">
                        <input type="submit" style="background-color: #2d92a9" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
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
  </div>
</div>

</html>
</template>