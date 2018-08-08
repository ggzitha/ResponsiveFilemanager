var elixir = require('laravel-elixir');
elixir.config.sourcemaps = false;
elixir(function (mix) {
    mix.less(
        [
            'style.less',
        ],
        'resources/tmp/css/style.css',
        'resources/assets/less'
    );

    mix.less(
        [
            "../../../node_modules/bootstrap-lightbox/less/bootstrap-lightbox.less"
        ],
        'resources/tmp/css/lib.css',
        'node_modules'
    );

    mix.styles(
        [
            "../../../node_modules/bootstrap/docs/assets/css/bootstrap.css",
            "../../../node_modules/bootstrap/docs/assets/css/bootstrap-responsive.css",
            "lib.css",
            "../../../node_modules/bootstrap-modal/css/bootstrap-modal.css",
            "../../../node_modules/jquery-contextmenu/dist/jquery.contextMenu.css",
            "style.css"
        ],
        'filemanager/css/style.css',
        'resources/tmp/css'
    );

    // mix.styles(
    //   ["rtl-style.less"],
    //   'filemanager/css/rtl-style.css',
    //   'resources/assets/less'
    // );

    mix.scripts(
        [
            "bootstrap/js/bootstrap-transition.js",
            "bootstrap/js/bootstrap-affix.js",
            "bootstrap/js/bootstrap-dropdown.js",
            "bootstrap/js/bootstrap-alert.js",
            "bootstrap/js/bootstrap-button.js",
            "bootstrap/js/bootstrap-collapse.js",
            "bootstrap/js/bootstrap-dropdown.js",
            "bootstrap/js/bootstrap-modal.js",
            "bootstrap/js/bootstrap-tooltip.js",
            "bootstrap/js/bootstrap-popover.js",
            "bootstrap/js/bootstrap-scrollspy.js",
            "bootstrap/js/bootstrap-tab.js",
            "bootstrap/js/bootstrap-typeahead.js",
            "bootstrap-lightbox/js/bootstrap-lightbox.js",
            "jquery-contextmenu/dist/jquery.contextMenu.js",
            "vanilla-lazyload/dist/lazyload.js",
            "jquery-scrollstop/jquery.scrollstop.js",
            "bootbox.js/bootbox.js",
            "jquery-touchswipe/jquery.touchSwipe.js",
            "bootstrap-modal/js/bootstrap-modalmanager.js",
            "bootstrap-modal/js/bootstrap-modal.js",
            "clipboard/dist/clipboard.js",
            "jquery-ui-touch-punch/jquery.ui.touch-punch.js",
        ],
        'filemanager/js/plugins.js',
        'node_modules'
    );

    mix.copy(
        [
            "node_modules/blueimp-file-upload/js/jquery.fileupload-audio.js",
            "node_modules/blueimp-file-upload/js/jquery.fileupload-image.js",
            "node_modules/blueimp-file-upload/js/jquery.fileupload-process.js",
            "node_modules/blueimp-file-upload/js/jquery.fileupload-ui.js",
            "node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js",
            "node_modules/blueimp-file-upload/js/jquery.fileupload-video.js",
            "node_modules/blueimp-file-upload/js/jquery.fileupload.js",
            "node_modules/blueimp-file-upload/js/jquery.iframe-transport.js",
            "node_modules/bootstrap-lightbox/js/bootstrap-lightbox.js",
            "node_modules/bootstrap-modal/js/bootstrap-modal.js",
            "node_modules/bootstrap-modal/js/bootstrap-modalmanager.js",
        ],
        'filemanager/js/'
    );

    mix.copy(
        [
            "node_modules/blueimp-file-upload/css/jquery.fileupload.css",
            "node_modules/blueimp-file-upload/css/jquery.fileupload-ui.css",
        ],
        'filemanager/css/'
    );

    mix.scripts(
        ['include.js'],
        'filemanager/js/include.js'
    );

    mix.scripts(
        ['include.commercial.js'],
        'filemanager/js/include.commercial.js'
    );

    mix.scripts(
        ['plugin.js'],
        'filemanager/plugin.min.js'
    );

    mix.scripts(
        ['plugin_responsivefilemanager_plugin.js'],
        'tinymce/plugins/responsivefilemanager/plugin.min.js'
    );

    mix.scripts(
        ['modernizr.custom.js'],
        'filemanager/js/modernizr.custom.js'
    );
});