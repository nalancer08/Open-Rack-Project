<?php $site->getParts(array( 'shared/header-html', 'sticky-footer/header' )); ?>

	<?php //$site->getParts('sections/section-inicio') ?>
	<?php //$site->getParts('sections/section-somos') ?>
	<?php //$site->getParts('sections/section-problema') ?>
	<?php //$site->getParts('sections/section-solucion') ?>
	<?php //$site->getParts('sections/section-contacto') ?>

	<section class="section section-inicio">

		<div class="row hide">
			<div class="col col-4 col-offset-4">
			</div>
		</div>

		<form class="form-opinion" data-submit="ajax" action="http://texasribs.com.mx/wp-admin/admin-ajax.php" method="post">
			<div class="form-fields">

				<div class="row">
					<div class="col col-4">

						<div class="options">

							<div class="row">
								<div class="col col-12">
									<div class="form-group nombre options-combo">
										<label class="control-label" for="nombre">Nombre <span class="required">*</span></label>
										<input id="nombre" class="input-block form-control" type="text" data-validate="required" name="nombre">
									</div>
								</div>

								<div class="col col-12">
									<div class="form-group nombre1 options-combo">
										<label class="control-label" for="nombre">Nombre <span class="required">*</span></label>
										<input id="nombre" class="input-block form-control" type="text" data-validate="required" name="nombre">
									</div>
								</div>
							</div>

						</div>

					</div>

					<div class="col col-8">
						<div class="content"></div>
					</div>
				</div>

			</div>
		</form>

	</section>

<?php $site->getParts(array( 'sticky-footer/footer', 'shared/footer-html' )); ?>