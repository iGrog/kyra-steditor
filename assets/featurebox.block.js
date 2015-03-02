SirTrevor.Blocks.Featurebox = (function() {

  var template =  '<div class="row">' +
      '<div class="col-md-6">Icon: <input name="Icon" class="form-control" /></div>' +
      '<div class="col-md-6">Name: <input name="Name" class="form-control" /></div>' +
      '</div>' +
      '<div class="row">'+
      '<div class="col-md-12">Description:<br/><textarea name="Description" class="form-control" ></textarea></div>' +
      '</div>';


    return SirTrevor.Block.extend({

        type: "featurebox",
        title: function ()
        {
            return 'FeatureBox'
        },

        icon_name: 'text',

        loadData: function (data)
        {
            this.$('input[name="Icon"]').val(data.Icon);
            this.$('input[name="Name"]').val(data.Name);
            this.$('textarea[name="Description"]').val(data.Description);
        },

        editorHTML: function() {
          return _.template(template, this);
        }
});

})();


