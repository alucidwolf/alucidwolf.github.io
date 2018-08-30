function activateTinyEditor(el) {
    if ($(el).hasClass('is-editable')) {
        //console.log(el);

        var selectorTinyId = el.id;
        var selectorTiny = "#" + selectorTinyId;
        //console.log(selectorTinyId);
        //console.log(selectorTiny);

        // remove other editors from being active
        // var allEditorsTinyIds = $('.is-editable').map(function () {
        //     return this.id
        // }).get();
        // allEditorsTinyIds.map(function (item) {
        //     if (item !== selectorTinyId) {
        //         var itemToRemove = "#" + item;
        //         tinymce.remove(itemToRemove)
        //     }
        // })

        tinymce.init({
            selector: selectorTiny,
            toolbar: 'storedcontent newdocument bold italic underline',
            menubar: false,
            inline: true,
            mobile: {
                theme: 'mobile',
                toolbar: ['undo', 'bold']
            },
            // custom menu button for stored content
            setup: function (editor) {
                editor.addButton('storedcontent', {
                    type: 'menubutton',
                    text: 'Stored Content',
                    icon: false,
                    menu: [{
                        text: 'Sallys Paragraph',
                        onclick: function () {
                            var content = `<p>&nbsp;</p>
                        <p align="center"><strong style="color: #000080;">WHY BIRMINGHAM?</strong></p>
                        <p>The <strong>largest</strong> British City outside of London: - UK Central - <a target="_blank" href="http://birminghamtoolkit.com/">Find
                                out more</a><br />
                        </p>
                        <p>International Airport: -<span> </span>18 <strong>US Destinations</strong>; 110&nbsp;Worldwide <a target="_blank"
                                href="http://www.want2gothere.com/bhx/destinations/">destinations</a>&nbsp;</p>
                        <p><a target="_blank" href="http://visitbirmingham.com/what-to-do/attractions/">Attractions</a>:&nbsp;Stratford
                            &#8211;upon- Avon (Birthplace of <strong>William Shakespeare</strong>) Edgbaston Cricket Ground, Birmingham Library
                            (Europe&#8217;s Largest) Barclaycard Arena (host of the 2016 Davis Cup)</p>
                        <p>Reknowned for <strong><a target="_blank" href="http://www.meetbirmingham.com/">Business Tourism</a></strong>:&nbsp;National
                            Exhibition Centre, Resort World entertainment complex</p>
                        <p>Did you know? Birmingham has more canals than <strong>Venice.</strong></p>
                        <p>A London style Hotel in the provinces, <strong>without the</strong> London prices and with ease of access on a
                            secure site. - <a target="_blank" href="http://connectplusathiltonworldwide.com/property/hilton-birmingham-metropole-hotel/">Discover
                                Hilton Birmingham Metropole</a>&nbsp;</p>

                        <p align="center"><strong><span style="color: #000080;">WHY HILTON BIRMINGHAM METROPOLE?</span></strong></p>
                        <p>62904&nbsp;&nbsp; Total square feet of event space</p>
                        <p>2000&nbsp;&nbsp; &nbsp; Successful events hosted&nbsp;each year</p>
                        <p>790&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Guest rooms and suites</p>
                        <p>33&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; Flexible event space</p>
                        <p>3&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Dining experiences</p>
                        <p>1&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; LivingWell Health Club and The Ocean Rooms Spa</p>
                        <p>&nbsp;</p>
                        <p><span style="font-size:12.0pt;line-height:115%;font-family: " times="" new="" roman","serif";="" roman";"="">Easily
                                accessible by rail, road and air networks and located next to the National Exhibition Centre, we are at the hub
                                that connects Birmingham International Airport with the International Railway station with the M42, M6 and M40.
                                Regular complimentary transport ensures your guests will only be minutes from the airport and railway station.<br />
                                <br />
                                Hilton Birmingham Metropole sets the stage for business events with impact and social occasions that are
                                memorable. Our prime location allows you and your delegates to explore some of the best there is to see in the
                                United Kingdom, from the bustling city centre of Birmingham, to historic locations such as Warwick Castle or
                                even the famous Cadbury World.<br />
                            </span>&nbsp; </p>
                        <p><span style="font-size:12.0pt;line-height:115%;font-family: " times="" new="" roman","serif";="" roman";"="">Where
                                connections are made and partnerships forged. Where productive days lead to constructive results. And where our
                                expertise is your guarantee of success. Where it all happens: Hilton Birmingham Metropole &#8211; the heart of
                                exceptional service in the heart of England, and in one of the most accessible cities in Europe. This is where
                                a passionate and creative team make the incredible happen every day, and make your conference, meeting or
                                event, the best one ever.</span></p>
                        <p><span id="ctl00_ctl00_MainContent_MainContent_rptParaType_ctl00_rptParagraphs_ctl01_lblContents"><span id="ctl00_ctl00_MainContent_MainContent__dataListRB_ctl01_lbContent"><br />
                                </span></span></p>
                        <div>Please take a moment to review the links above for a comprehensive overview of our hotel offerings.</div>
                        <p>&nbsp;</p>`
                            editor.insertContent(content);
                        }
                    }, {
                        text: 'Bryce\'s Paragraph',
                        onclick: function () {
                            var content = `<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">Thank you for your interest in the <hilton brighton="" metropole="" hotel=""> we are delighted that you are considering us for your forthcoming event. </hilton></span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><strong><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">Why Hilton?</span></strong><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;"> <hilton brighton="" metropole="" hotel=""> <the perfect="" hotel="" for="" your="" small="" business="" needs.&#160; private="" meeting="" rooms,="" many="" with="" direct="" sea="" views="" enabling="" delegates="" to="" feel="" relaxed="" and="" stress="" free="" whilst="" attending="" a="" at="" the="" hotel.&#160; conveniently="" located="" in="" central="" brighton="" on="" seafront,="" close="" all="" transport="" links="" amenities.="" &#160; the="" rooms="" are="" quiet="" area="" of="" be="" great="" success.&#160; innovative="" catering="" options="" available="" ensuring="" guests="" fulfilled="" throughout="" day.=""> </the></hilton></span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">We would be happy to offer the <insert name="" of="" room="">for your meeting on <insert date="" &="" times="">. </insert></insert></span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">We could offer you our meeting simplified rate which includes: </span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">Free Wi-Fi internet access </span></p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">Two servings of tea/coffee with refreshments </span></p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">Two course lunch </span></p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">LCD Projector &amp; Screen </span></p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">A flipchart Complimentary stationery for the delegates </span></p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">24 hour cancellation </span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">The rate we could offer for the above date is <insert rate=""> inc VAT per person. </insert></span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><strong><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">Our additional recommendations</span></strong><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;"> &lt; Treat your guests to a sumptuous afternoon tea - served in your meeting room or our Waterhouse Bar &amp; Terrace, or celebrate a milestone in your company with some enticing cocktails using Brighton Gin, or Brighton Bier, the perfect end to your day &gt; </span></p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">&nbsp;<a name="_GoBack" style='width: 20px; height: 20px; text-indent: 20px; background-image: url("/CuteSoft_Client/CuteEditor/Load.ashx?type=image&file=anchor.gif"); background-repeat: no-repeat;'></a></span></p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">As agreed we are currently holding a provisional booking for you, which will be held until <insert date="">. Should we receive another enquiry for these dates within this period, we will contact you to discuss whether you would like to proceed with the booking and we may require a signed contract from you in order to continue holding the space. </insert></span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">OR <remove either="" above="" or="" below="" as="" appropriate=""> </remove></span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">As agreed we are not currently holding a provisional booking for you, and whilst the dates are currently available we cannot guarantee the same space or rates being offered in the future.&nbsp;</span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">&nbsp;If you would like to come and view our facilities, or discuss your booking in person, I will be happy to make the arrangements for you. </span></p>
<p style="line-height: normal;">&nbsp;</p>
<p style="line-height: normal;"><span style="font-family: &quot;Verdana&quot;,&quot;sans-serif&quot;; font-size: 9pt;">Many Thanks, </span></p>`
                            editor.insertContent(content);
                        }
                    }]
                })
            },
            init_instance_callback: function (editor) {
                // remove editor when it loses focus
                // editor.on('blur', function (e) {
                //     console.log('Element Clicked: ', e.target.id);
                //     var editorTinyToRemove = "#" + e.target.id;
                //     tinymce.remove(editorTinyToRemove)
                // })

                // get content from editor when it loses focus
                editor.on('GetContent', function (e) {
                    console.log(e.content);
                })
            }
        })
    }
}
