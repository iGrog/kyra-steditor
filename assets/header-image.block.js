SirTrevor.Blocks.Headerimage = SirTrevor.Block.extend({

  type: "headerimage",
  title: function() { return 'Header Image' },

  droppable: true,
  uploadable: true,

  icon_name: 'image',

  loadData: function(data){
    // Create our image tag
    this.$editor.html($('<img>', { src: data.file.url }));
  },

  onBlockRender: function(){
    /* Setup the upload button */
    this.$inputs.find('button').bind('click', function(ev){ ev.preventDefault(); });
    this.$inputs.find('input').on('change', _.bind(function(ev){
      this.onDrop(ev.currentTarget);
    }, this));
  },

  onUploadSuccess : function(data) {
    this.setData(data);
    this.ready();
  },

  onUploadError : function(jqXHR, status, errorThrown){
    this.addMessage(i18n.t('blocks:image:upload_error'));
    this.ready();
  },

  onDrop: function(transferData){
    var file = transferData.files[0],
        urlAPI = (typeof URL !== "undefined") ? URL : (typeof webkitURL !== "undefined") ? webkitURL : null;

    // Handle one upload at a time
    if (/image/.test(file.type)) {
      this.loading();
      // Show this image on here
      this.$inputs.hide();
      this.$editor.html($('<img>', { src: urlAPI.createObjectURL(file) })).show();

      this.uploader(file, this.onUploadSuccess, this.onUploadError);
    }
  }
});