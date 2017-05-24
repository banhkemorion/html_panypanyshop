 function validate()
      {
         if( document.myForm.Name.value == "" )
         {
            alert( "Mời bạn nhập tên!" );
            document.myForm.Name.focus() ;
            return false;
         }
		 
		  if( document.getElementById("adress").value == "" )
         {
            alert( "Mời bạn nhập địa chỉ!" );
            document.myForm.Adress.focus() ;
            return false;
         }
		 
		 if( document.myForm.PhoneNB.value == "" )
         {
            alert( "Mời bạn nhập số đt!" );
            document.myForm.PhoneNB.focus() ;
            return false;
         }
		 
		 if( document.myForm.title.value == "" )
         {
            alert( "Mời bạn nhập tiêu đề!" );
            document.myForm.title.focus() ;
            return false;
         }
		 
		  if( document.myForm.nd.value == "" )
         {
            alert( "Mời bạn nhập nội dung!" );
            document.myForm.nd.focus() ;
            return false;
         }
		 
		 if (document.myForm.EMail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))  {  
   	 		return (true) 
  			}  else {
    		alert("Bạn chưa nhâp Email!Hoặc Email chưa đúng!");  
			document.myForm.EMail.focus(); 
   	 		return (false)  ;
			}
			
		 
		 
		
			
        
      }
   //-->
	 