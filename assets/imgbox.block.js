SirTrevor.Blocks.Imagebox = (function() {

  var template =  '<div class="row">' +
      '<div class="col-md-6">Name: <input name="Name" class="form-control" /><br/>' +
      'Description: <input name="Description" class="form-control" />' +
      '</div>' +
      '<div class="col-md-6"><img class="imgbox" style="width: 100%; max-height: 150px; max-width: 150px;" /></div>' +
      '</div>';


    return SirTrevor.Block.extend({

        type: "imagebox",
        title: function ()
        {
            return 'ImageBox'
        },

        droppable: false,
        uploadable: true,

        icon_name: 'image',

        loadData: function (data)
        {
            this.$('img.imgbox').attr('src', data.data.Images.o);
            this.$('input[name="Name"]').val(data.Name);
            this.$('input[name="Description"]').val(data.Description);
            this.$inputs.show();
        },

        editorHTML: function() {
          return _.template(template, this);
        },

        onBlockRender: function ()
        {
            /* Setup the upload button */
            this.$inputs.find('button').bind('click', function (ev)
            {
                ev.preventDefault();
            });
            this.$inputs.find('input').on('change', _.bind(function (ev)
            {
                this.onDrop(ev.currentTarget);
            }, this));
        },

        onUploadSuccess: function (data)
        {
            this.setData(data);
            this.ready();
        },

        onUploadError: function (jqXHR, status, errorThrown)
        {
            this.addMessage(i18n.t('blocks:image:upload_error'));
            this.ready();
        },

        onDrop: function (transferData)
        {
            var file = transferData.files[0],
                urlAPI = (typeof URL !== "undefined") ? URL : (typeof webkitURL !== "undefined") ? webkitURL : null;

            // Handle one upload at a time
            if (/image/.test(file.type))
            {
                this.loading();
                // Show this image on here
                //this.$inputs.hide();
                this.$('img.imgbox').attr('src', urlAPI.createObjectURL(file)).show();

                this.uploader(file, this.onUploadSuccess, this.onUploadError);
            }
        }

});

})();


