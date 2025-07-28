//<!-- Gainsight PX Tag-->
 // <script type="text/javascript">
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-MGPCEYFDZNWT-2");
//</script>
//<!-- Gainsight PX Tag-->

 
//passing user and account objects:
function aps(user) {  
aptrinsic("identify",
  {
  //User Fields
    "id": "Dhoni321am",//"unique-user-id", // Required for logged in app users
    "email": "Dhoni@email321am",//"userEmail@address.com",
    "firstName": "Dhoni",//"John",
    "lastName": "Mahendra321",//"Smith",
    "city":"Ranchi", //optional
    "country":"India", //optional
    "phone":"8142803436", //optional
    "signUpDate": 13072025, //unix time in ms
    "Plan" : "Seven",
    "houseName": "Sinh", //optional
    "gender":"male",
    "age": 45,
    "mobileNetwork": "Airtel", //optional
     //optional
     //Custom attributes - please create those custom attributes in Ap
    
    //"signUpDate": 1522697426479, //unix time in ms
   // "plan" : "gold", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
    //"price" : 95.5,
    //"userHash": "" // optional transient for HMAC identification
  },
  {
  //Account Fields
    "id":"Cricket",//"IBM", //Required
    "name":"Dhoni Team",
    "industry":"Sports",//International Business Machine",
    "countryName":"India", //optional
    "CompanyName":"DhoniSeven", //optional
    "CricketTeam":"CSK", //optional
    //"Program": "Platinum" // flat custom attributes
 })};
