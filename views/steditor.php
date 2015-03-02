<textarea id=<?=$fId; ?> name="<?= $fName; ?>"><?= $this->context->model[$this->context->jsonField]; ?></textarea>


<?php

    $js = <<<EEE

        SirTrevor.DEBUG = true;
        SirTrevor.LANGUAGE = "en";

        SirTrevor.setDefaults({
            uploadUrl: "{$this->context->uploadUrl}"
        });
        window.editor = new SirTrevor.Editor({
            el: $('#{$fId}'),
            blockTypes: ["Columns", "Heading", "Mytext", "Imagebox", "Featurebox", "Mylist", "Image",  "Video"]
        });


EEE;
    $this->registerJs($js);

?>
