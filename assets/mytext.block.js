SirTrevor.Blocks.Mytext = SirTrevor.Block.extend({

    type: "mytext",

    title: function ()
    {
        return i18n.t('blocks:text:title');
    },

    editorHTML: '<div class="st-required st-text-block" contenteditable="true"></div>',

    icon_name: 'text',

    //loadData: function (data)
    //{
    //    this.getTextBlock().html(data.text);
    //},

    loadData: function(data){
      this.getTextBlock().html(SirTrevor.toHTML(data.text, this.type));
    }

    //,toData: function ()
    //{
    //
    //    var bl = this.$el,
    //        dataObj = {};
    //
    //    /* Simple to start. Add conditions later */
    //    if (this.hasTextBlock())
    //    {
    //        var content = this.getTextBlock().html();
    //        if (content.length > 0) dataObj.text = content;
    //    }
    //
    //    // Set
    //    if (!_.isEmpty(dataObj))
    //    {
    //        this.setData(dataObj);
    //    }
    //}
});
