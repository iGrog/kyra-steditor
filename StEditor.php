<?php

    namespace kyra\steditor;

    use yii\helpers\Html;
    use yii\helpers\Url;
    use yii\widgets\InputWidget;

    class StEditor extends InputWidget
    {
        public $model;
        public $jsonField = 'ContentJSON';
        public $uploadUrl = '';

        public function init()
        {
            if(empty($this->uploadUrl)) $this->uploadUrl = Url::to(['/kyra.image/default/upload']);
            StEditorAsset::register(\Yii::$app->view);
            $this->jsonField = $this->attribute;
        }

        public function run()
        {
            $fName = Html::getInputName($this->model, $this->jsonField);
            $fId = Html::getInputId($this->model, $this->jsonField);
            return $this->render('steditor', ['fName' => $fName, 'fId' => $fId]);
        }
    }