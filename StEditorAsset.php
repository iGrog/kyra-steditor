<?php

    namespace kyra\steditor;

    use yii\web\AssetBundle;

    class StEditorAsset extends AssetBundle
    {
        public $sourcePath = '@vendor/kyra/steditor/assets';
        public $js = [
            'underscore.js',
            'eventable.js',
            'sir-trevor.js',
            'header-image.block.js',
            'mylist.block.js',
            'mytext.block.js',
            'imgbox.block.js',
            'featurebox.block.js',
        ];
        public $css = [
            'sir-trevor-icons.css',
            'sir-trevor.css'
        ];
        public $depends = [
            'yii\web\JqueryAsset',
        ];
    }