var Twit = require('twit')
var fs = require('fs')
var { DownloaderHelper } = require('node-downloader-helper');
var T = new Twit({
  consumer_key:         '4XjnTeRdGz4Ku9KBF7BTSDiKU',
  consumer_secret:      'aKyCgo3mwgF3nf2KiZTTIu5tfX0TzSgsFCIMc81ZF9WV8B7ULU',
  access_token:         '2285478440-qsFGy6fhJpkO7XcBgk4bWRDAxvHf7DnZbgJiuXa',
  access_token_secret:  'zFYtvOj7jnwXYrP63sKRGy1vGjpnTj8V1XUSG1FbWngn2',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

//tweet
// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
// })

//get data
// T.get('search/tweets', { q: '#khansofficial since:2020-9-1', count: 10 }, function(err, data, response) {
//   console.log(data)
// })



//data Aray
var memeArray = ['https://preview.redd.it/rfe121u2c9l51.jpg?width=640&crop=smart&auto=webp&s=4e528834b50de9269e051a05f6e48e15a52fd940',
'https://i.redd.it/o755ux20fbl51.jpg',
'https://preview.redd.it/bi4l6yphlbl51.jpg?width=640&crop=smart&auto=webp&s=d51ec64fdda2e0ca588095c5b5d3e096896f4677',
'https://i.redd.it/r318oz75dal51.jpg', 'https://preview.redd.it/jlmleliws6l51.png?width=640&crop=smart&auto=webp&s=1d70647bb89986671b5cbffb1892f4d99d6f3498', 'https://i.redd.it/153sbeh5lbl51.png', 'https://external-preview.redd.it/IUj_TWkuIUPaRSBlwd_4ji2Yphx840cDOevm3ziJceE.jpg?width=640&crop=smart&auto=webp&s=a4c2effc2741cd037f1d4d117a535280f98e3f02', 'https://i.redd.it/q3g0i95995l51.jpg', 'https://i.redd.it/d88lc6wdi5l51.jpg', 'https://preview.redd.it/o8wnw0h598l51.jpg?width=640&crop=smart&auto=webp&s=69c4c7a0c8825efa5cf42e1448d7bc2a2bd469ff', 'https://preview.redd.it/pb0cv4kwg7l51.jpg?width=640&crop=smart&auto=webp&s=d979f191c79b76bb28f96b85103241afea1f7171', 'https://preview.redd.it/28in0ehw0cl51.jpg?width=640&crop=smart&auto=webp&s=105f6798825a550e064cf39117e06281baafa9c3', 'https://preview.redd.it/rgoe157dt9l51.jpg?width=640&crop=smart&auto=webp&s=c7ace8c3a1f3e4af703c55145bfc3e85622c7d97', 'https://preview.redd.it/idk6bfbnlal51.jpg?width=640&crop=smart&auto=webp&s=50fe9fb58552d5df296251224880bf4573f4d89d', 'https://preview.redd.it/nkir7rh4n3l51.png?width=640&crop=smart&auto=webp&s=1c6f9ae826e8bf065e5423f0f751b09d219b30c3', 'https://preview.redd.it/xw0alpuwz3l51.jpg?width=640&crop=smart&auto=webp&s=c9402233e391dbfc9b8bcb44696b6d7cebb7a0bd', 'https://preview.redd.it/mf3s5nyxt1l51.jpg?width=640&crop=smart&auto=webp&s=dfc70c098f92c6c3ca37086398871661e17cc50d', 'https://preview.redd.it/9ioyhuf27cl51.jpg?width=640&crop=smart&auto=webp&s=351a2daf7eae92837a238378b25a40d91f9004fe', 'https://i.redd.it/n0c93ii3c8l51.jpg', 'https://preview.redd.it/18uprpt54cl51.jpg?width=640&crop=smart&auto=webp&s=21f852912d7658737a73bc44ad211e0f4f028545', 'https://preview.redd.it/v8rj8u5n28l51.jpg?width=640&crop=smart&auto=webp&s=a5e8e96c81357419cea9b09e7f92ffa7337d9317', 'https://preview.redd.it/h3d5zqjkq4l51.jpg?width=640&crop=smart&auto=webp&s=c3d9603379255221969ae32bb65d6d90174c6979', 'https://preview.redd.it/v860c13m1cl51.jpg?width=640&crop=smart&auto=webp&s=46638db83267bf7baf5c40f008c7a7321a41a07d', 'https://preview.redd.it/gxd8epbogal51.jpg?width=640&crop=smart&auto=webp&s=b0a1125bed2bf08772569faff12feac0febb5901', 'https://external-preview.redd.it/DkrfoOORqf0LpudGXlrROVJQ2MDtgSR6DaiPsIq8WhM.jpg?width=640&crop=smart&auto=webp&s=3b43b800d23d4c7d1db18b2d719081ad3f7d0cd9', 'https://external-preview.redd.it/J46RWG7KRiJ8PrNhAFODJRcBAB5-fre9I0Y5gDTkGyw.jpg?width=640&crop=smart&auto=webp&s=6eaf74a2abe854cccc59962318ba95d8adc38bda', 'https://external-preview.redd.it/ffy2UYICY7lFaQj01x5rJd7k_iCngtpTkBlmyQtarmw.jpg?width=640&crop=smart&auto=webp&s=4a105a81a7803a0238ef0972c46d924014709e9d', 'https://i.redd.it/zkoyjjg2k5l51.jpg', 'https://preview.redd.it/6jb2zu9hnbl51.jpg?width=640&crop=smart&auto=webp&s=18563880dabac0baa3b21d2414b3e1354ddcd6c3', 'https://preview.redd.it/d5moupe4t3l51.jpg?width=640&crop=smart&auto=webp&s=73f0c3bdd137fce275d20db8791aa1160324816a', 'https://preview.redd.it/vv89sqi51cl51.jpg?width=640&crop=smart&auto=webp&s=6cfe1c44a3c39f19109fa905dd962e55e3925328', 'https://preview.redd.it/ug2jalisu1l51.jpg?width=640&crop=smart&auto=webp&s=c010efb01ba8ae32e3f1863314cacea111dc4eb4', 'https://external-preview.redd.it/9UAThPYLfVpFk4Aw46Fh3tWhWX2c6oHyhwQVu51XfWc.jpg?auto=webp&s=cc0c607ac9abde152f63b9e9d5c780fb0862dd60', 'https://i.redd.it/z7v61dy976l51.png', 'https://external-preview.redd.it/8sidpxu-rKoGKm1iwkYEa-2q1WaDwt31rJCgJv4CFPs.jpg?width=640&crop=smart&auto=webp&s=642dd6932a1c7b139f7704e93e5d2248990d0d7c', 'https://preview.redd.it/alswikmnn9l51.png?width=640&crop=smart&auto=webp&s=520107091d7b149bda1c7ee490826c99f94fb416', 'https://preview.redd.it/sj8nt5t1y8l51.png?width=640&crop=smart&auto=webp&s=3abe4a2cb9e250c0e77554ca315dd1f96ee30a24', 'https://i.redd.it/cvukt9fqxbl51.png', 'https://i.redd.it/r3ibzbk0gal51.jpg', 'https://preview.redd.it/wy7hlr6qxal51.jpg?width=640&crop=smart&auto=webp&s=bf7dcf17562fa5ea3c2913483fa24a2b07f12a78', 'https://i.redd.it/e8dll0puu8l51.png', 'https://preview.redd.it/qyupvuwcvbl51.jpg?width=640&crop=smart&auto=webp&s=c2a69ee84554d3b63a7a02eaf47a85bbead29a05', 'https://preview.redd.it/qxqprws0v6l51.jpg?width=640&crop=smart&auto=webp&s=d7dbbb2d975f9e0424690ca03a06ba8281a53249', 'https://external-preview.redd.it/FUejUIUDas5P-ogj3t8AHvViHbC0xQ02Wo8YZTQwWUc.jpg?width=640&crop=smart&auto=webp&s=f936bdc35c9ff65fd6e7e062e250264bf0c7ddf5', 'https://i.redd.it/1uc7alyelbl51.jpg', 'https://i.redd.it/oskcx45ql9l51.png', 'https://preview.redd.it/8jk5xhx6h6l51.jpg?width=640&crop=smart&auto=webp&s=22a455ceb5c08761cdfd28c563bdb9634ae87633', 'https://external-preview.redd.it/bwpyVEZnCoo9nAtE9BPvCDo5Ew25xZmJcmlAn-pWhcE.jpg?auto=webp&s=7f48c538dfb688e9ff9f1c65c90891d8faa7ce18', 'https://preview.redd.it/68uv7gr1j4l51.jpg?width=640&crop=smart&auto=webp&s=e2ed5f6bca6970b7df535fb31dd73c0291c579ab', 'https://preview.redd.it/mzh5hx4kk6l51.jpg?width=640&crop=smart&auto=webp&s=6e25839a46a3b2d8a97432e0b8afffbb8be5d968', 'https://preview.redd.it/mr13xgg3e4l51.jpg?width=640&crop=smart&auto=webp&s=7874a76cab9b23273b69a60987fc02bfc6c41577', 'https://preview.redd.it/a822yikqa8l51.jpg?width=640&crop=smart&auto=webp&s=3af84b6af27e68af4097101af0597625a44cceeb', 'https://preview.redd.it/cck2jcaz59l51.png?width=640&crop=smart&auto=webp&s=15df83b773df0bddd6e9eececfd98b46533b1e84', 'https://i.redd.it/6txgovnwhbl51.png', 'https://preview.redd.it/drw6uiqtk9l51.jpg?width=640&crop=smart&auto=webp&s=f23e2fb6d126cd5e53a738cdf2167c7c0ef76b42', 'https://preview.redd.it/bmxbofcov5l51.jpg?width=640&crop=smart&auto=webp&s=25417a5670fdd382bc2a1652eea91aceeb946c08', 'https://preview.redd.it/8x2nv8h436l51.jpg?width=640&crop=smart&auto=webp&s=c52b4f63d4a18355d642fa2b50fb5bd75920f8c5', 'https://preview.redd.it/bkuncocld9l51.jpg?width=640&crop=smart&auto=webp&s=e3a2174a7ab18988041cc44b2889370655636024', 'https://i.redd.it/kzxd8p22k7l51.png', 'https://preview.redd.it/uy86iygaq5l51.jpg?width=640&crop=smart&auto=webp&s=37fade67d974a495d9580c486cf814ddc9eac13d', 'https://external-preview.redd.it/DkrfoOORqf0LpudGXlrROVJQ2MDtgSR6DaiPsIq8WhM.jpg?width=640&crop=smart&auto=webp&s=3b43b800d23d4c7d1db18b2d719081ad3f7d0cd9', 'https://i.redd.it/uewa01vhr1l51.jpg', 'https://i.redd.it/r32oy8hvj4l51.jpg', 'https://i.redd.it/hifq4jkgu6l51.png', 'https://preview.redd.it/3kvmz9k3v6l51.jpg?width=640&crop=smart&auto=webp&s=251b23981c252b1ca923d8f2bbff315db2969d2b', 'https://preview.redd.it/4bpc275ol8l51.jpg?width=640&crop=smart&auto=webp&s=d33cbb28761bc8ea5d115807e1a9244477782e3f', 'https://preview.redd.it/n6azmntya8l51.jpg?width=640&crop=smart&auto=webp&s=b6d20a24502858169cf1cc2ea22978d4f3565960', 'https://preview.redd.it/7imgmc04u2l51.jpg?width=640&crop=smart&auto=webp&s=6baf5d99f5a2886fcbf8d15d467d4970cf414cd4', 'https://preview.redd.it/7xms43an7cl51.png?width=640&crop=smart&auto=webp&s=f402597c9b08f75fe874c4f356615e4cd6747113', 'https://preview.redd.it/mjwzfnunp8l51.jpg?width=640&crop=smart&auto=webp&s=c7d6fc16d800b19482e3154a52b73f6729882405', 'https://preview.redd.it/sm9d1spt96l51.png?width=640&crop=smart&auto=webp&s=09b1bbe071aaccbb00aa18829a7f6581435ecbf3', 'https://preview.redd.it/pyl8pi2w87l51.jpg?width=640&crop=smart&auto=webp&s=b6a6908c5749d2acdc6154f8d8c4335879a4c44a', 'https://i.redd.it/fxzanwvnl9l51.jpg', 'https://preview.redd.it/8vupwtmhwzk51.jpg?width=640&crop=smart&auto=webp&s=41ade9fa50cae3a9f106e23af583fbb4161c0dde', 'https://preview.redd.it/5xtglmo702l51.jpg?width=640&crop=smart&auto=webp&s=cb2ebe387c76b6207c11ca0d37507190c406016b', 'https://preview.redd.it/vl4j1sixx3l51.jpg?width=640&crop=smart&auto=webp&s=9cbe2a18d1ddeeade1e8de8f397ac95925f7969f', 'https://preview.redd.it/4v9llp8a38l51.jpg?width=640&crop=smart&auto=webp&s=c9b77ad75da3df24a39f89feed5f633d7fb3edad', 'https://external-preview.redd.it/FUejUIUDas5P-ogj3t8AHvViHbC0xQ02Wo8YZTQwWUc.jpg?width=640&crop=smart&auto=webp&s=f936bdc35c9ff65fd6e7e062e250264bf0c7ddf5', 'https://preview.redd.it/ruwv7icr7al51.png?width=640&crop=smart&auto=webp&s=dbe3a9d4d10a1621375c67e826ed9860f452650c', 'https://preview.redd.it/rsy2ofn4u4l51.png?width=640&crop=smart&auto=webp&s=696bc5a8a565de32c7861d3747cde7f28a8e1727', 'https://preview.redd.it/h3yrgfoj00l51.jpg?width=640&crop=smart&auto=webp&s=306be5ae4ad9e0de934d1bd52b5d97b4623b7dae', 'https://external-preview.redd.it/Uvozn8oZDhz9JSv84630PxFOc1W-1Ww9ttY0KF-bzOI.jpg?width=640&crop=smart&auto=webp&s=c89c1ab1c0a68730efed19d70e14f31ba73570d5', 'https://i.redd.it/4983wzhmk3l51.jpg', 'https://i.redd.it/bcxgdyi6m7l51.png', 'https://preview.redd.it/dof8vdxcg5l51.jpg?width=640&crop=smart&auto=webp&s=268233159306868f0b984fa72154001bd0aa1f54', 'https://preview.redd.it/334800w392l51.png?width=640&crop=smart&auto=webp&s=4b7f855bf8e8945e0d629fdbb53106fbee5fe6ab', 'https://external-preview.redd.it/IUj_TWkuIUPaRSBlwd_4ji2Yphx840cDOevm3ziJceE.jpg?width=640&crop=smart&auto=webp&s=a4c2effc2741cd037f1d4d117a535280f98e3f02', 'https://preview.redd.it/l0qwk81rfxk51.jpg?width=640&crop=smart&auto=webp&s=2bd1699bbff5f10209501efd8af7383331466593', 'https://preview.redd.it/28okbket36l51.jpg?width=640&crop=smart&auto=webp&s=bcee5ec1ebbcd84d633dd0a8cd4041b4e2a7e8a5', 'https://preview.redd.it/6isivszms4l51.jpg?width=640&crop=smart&auto=webp&s=f65ccc537471d8b3d1dc43ae7369e09b01fe891d', 'https://i.redd.it/85zl2gs4k4l51.jpg', 'https://i.redd.it/2t7ibp5te4l51.png', 'https://preview.redd.it/vxxo51m1q5l51.jpg?width=640&crop=smart&auto=webp&s=0ab8e857d381abf736e2d2eaf84055f8c83e2500', 'https://preview.redd.it/vd2wts5zp7l51.png?width=640&crop=smart&auto=webp&s=153c4a5c5f86e330490434cecce0ecf36c42dbb5', 'https://preview.redd.it/0savvod9v5l51.jpg?width=640&crop=smart&auto=webp&s=1c2cf7cc51f40fb78cb5991b8cd0199444bc1a0d', 'https://preview.redd.it/w56x8ebeyzk51.png?width=640&crop=smart&auto=webp&s=6e64ce63c9925bc421150671f306a90781221592', 'https://i.redd.it/hacoi6t2t4l51.jpg', 'https://preview.redd.it/8mo4729wx6l51.jpg?width=640&crop=smart&auto=webp&s=af645fcd17fde763c3b46e68e524caed4f8ca604', 'https://preview.redd.it/xfpdmg7678721.jpg?width=640&crop=smart&auto=webp&s=0836c3b7d909be0953cb4bf856b317dd384eb919', 'https://i.redd.it/vcgettlxq2l51.jpg', 'https://preview.redd.it/l4rokv4xl3l51.png?width=640&crop=smart&auto=webp&s=fe7db69550dcff0f468d34583e699a51918308b9', 'https://i.redd.it/umdkad02f5l51.png', 'https://i.redd.it/d7hemyls87l51.png', 'https://external-preview.redd.it/DkrfoOORqf0LpudGXlrROVJQ2MDtgSR6DaiPsIq8WhM.jpg?width=640&crop=smart&auto=webp&s=3b43b800d23d4c7d1db18b2d719081ad3f7d0cd9', 'https://preview.redd.it/t5hf811y66l51.jpg?width=640&crop=smart&auto=webp&s=f98b90d28e5b4aa6036b7760ccc1314e1779a887', 'https://preview.redd.it/69pnr19lp5l51.jpg?width=640&crop=smart&auto=webp&s=2c299c128008eeac59dde7a8f80787d3f1e07fe0', 'https://preview.redd.it/eusoadhu54l51.jpg?width=640&crop=smart&auto=webp&s=26aef516f0951cb7010bd1267335b13fa6e5a9ca', 'https://i.redd.it/av2l4er0j3l51.png', 'https://i.redd.it/kbqim4ifdzk51.jpg', 'https://i.redd.it/9ng8z83df5l51.jpg', 'https://i.redd.it/2y8bunt1myk51.jpg', 'https://preview.redd.it/7am021v6k7l51.png?width=640&crop=smart&auto=webp&s=2e5f7b602d616ab5e7744934846a5ec021fb7627', 'https://preview.redd.it/pon0jsxuk4l51.jpg?width=640&crop=smart&auto=webp&s=ac7e5c26fc3ca38c78c866ff336b2b167306bf84', 'https://external-preview.redd.it/8sidpxu-rKoGKm1iwkYEa-2q1WaDwt31rJCgJv4CFPs.jpg?width=640&crop=smart&auto=webp&s=642dd6932a1c7b139f7704e93e5d2248990d0d7c', 'https://i.redd.it/tst7ncxmu5l51.png', 'https://preview.redd.it/91hsyrapu5l51.png?width=640&crop=smart&auto=webp&s=d7c24f1583d29245fad730a382f0394234e61413', 'https://preview.redd.it/viukhihtl4l51.png?width=640&crop=smart&auto=webp&s=d39170793da01d3f51f3dfb608730cf54dbb8fbe', 'https://preview.redd.it/8lb7q231wxk51.jpg?width=640&crop=smart&auto=webp&s=bd8ec36e7fc38db4f2271b92a9f7a21724b58a89', 'https://preview.redd.it/djg0g2ppd5l51.png?width=640&crop=smart&auto=webp&s=27807ab7b911c4f651973ab8721f49f5a11e9e21', 'https://preview.redd.it/c2i60mzdi4l51.png?width=640&crop=smart&auto=webp&s=d22d5b0f1a31a5f77a15d29315095acc2ee15b65', 'https://preview.redd.it/stbihxzsr3l51.jpg?width=640&crop=smart&auto=webp&s=c72c3805daf897df83c93a36f6f84c35a3ffdc5a', 'https://preview.redd.it/0db4z12dw4l51.jpg?width=640&crop=smart&auto=webp&s=6baaa522ae9432b8d96fe11f429abf338ec1e058', 'https://preview.redd.it/awzssraxa5l51.jpg?width=640&crop=smart&auto=webp&s=cca0b6aae99968aa14622c81477495976ab0db03', 'https://preview.redd.it/3zgeedyf00l51.jpg?width=640&crop=smart&auto=webp&s=69ab083f70c4b3ba91c51970b2d99de11aad5ab2', 'https://preview.redd.it/j6sg9c4k80l51.jpg?width=640&crop=smart&auto=webp&s=0e3b0d5a22899ec602df8f897580b85dc5e3affa', 'https://preview.redd.it/xfdu3azcwuk51.png?width=640&crop=smart&auto=webp&s=55a1feeae6eaf30ae175ef698c60b0c062d46cca', 'https://external-preview.redd.it/IUj_TWkuIUPaRSBlwd_4ji2Yphx840cDOevm3ziJceE.jpg?width=640&crop=smart&auto=webp&s=a4c2effc2741cd037f1d4d117a535280f98e3f02', 'https://preview.redd.it/5uayre6pn4l51.jpg?width=640&crop=smart&auto=webp&s=27e3813fd96030e790747887cbeea7cfb665f640', 'https://preview.redd.it/ofx7z6hq90l51.png?width=640&crop=smart&auto=webp&s=551df9cb37de2835886540d775072ca8cc44d2be', 'https://preview.redd.it/1a27k8m283l51.jpg?width=640&crop=smart&auto=webp&s=636a01fb5d22ddc2a195edd87931ae5cc9cdf05a', 'https://preview.redd.it/qvp4pi36l2l51.jpg?width=640&crop=smart&auto=webp&s=9cb38500731d1093c65a6d2f1ab7d26573651661', 'https://preview.redd.it/m6usjxk4x3l51.jpg?width=640&crop=smart&auto=webp&s=4269622d832ba43070d5ac6f5ffad48d0894aaff', 'https://preview.redd.it/aitqrbnfe2l51.jpg?width=640&crop=smart&auto=webp&s=5685426a3ad3bbe0463365fe290e7f4e1fb02fbe',]

let i = 1 ;

// const dl = new DownloaderHelper('https://i.redd.it/o755ux20fbl51.jpg', __dirname)
//     dl.on('error', err => console.error('Something happened'))
// dl.start().catch(err => {console.log('handles')})

function postToTwitter(){
   setInterval(() => {
  //downloading media
  console.log(memeArray[i]);
  const dl = new DownloaderHelper(memeArray[i], __dirname,{removeOnFail: true})

  var filepath ;
  dl.on('end', () => {
    console.log('Download Completed')
    filepath = dl.getDownloadPath()
    console.log(filepath);
    var media = fs.readFileSync(`${filepath}`, { encoding: 'base64' });

    T.post('media/upload', { media_data: media }, function (err, data, response) {
     var mediaIdStr = data.media_id_string;
     var altText = "Image by #khansofficial";
     var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } };

     T.post('media/metadata/create', meta_params, function (err, data, response) {
       if (!err) {
         // now we can reference the media and post a tweet (media will attach to the tweet)
         var params = { status: 'Why so serious, lets put a smile on that face ! \nAttempt #'+i+'\n#100DaysOfCode #Serverless #javascript #reactjs #nodejs #HTML #WomenWhoCode #tech #301DaysOfCode #flutter #computerscience #girlswhocode #makersneakpeek  #CodeNewbie #DataScience #Python #Programming', media_ids: [mediaIdStr] }

         T.post('statuses/update', params, function (err, data, response) {
           if(!err){
             console.log('posted !', i);

           }

         })
       }
     })
   })
   if(i == memeArray.length){
     clearInterval()
   }

 fs.unlink(`${filepath}`,err => {
   if(err){console.log(err)}
   else{
     console.log('file deleted', filepath)
   }
 })
  })
 dl.on('error', err => console.error('error'))
  dl.start().catch(err => {console.log('download failed')})
  i ++ ;
},1800000)
}
postToTwitter();
