let url , holder , p1 , button
p1 = 0
url = 'https://api.coinlore.net/api/tickers/?start='+p1+'&limit=30'
holder = document.querySelector('.crypto-info')
button = document.querySelector('.add-more')
button.addEventListener('click',getData)
fetch(url)
.then(data=>   data.json())

.then(res=>{


    let colorH1 , color24 , colorWeekly
    let  iconUp = '<i class="fa-sharp fa-solid fa-caret-up"></i>';
    let iconDown = '<i class="fa-sharp fa-solid fa-caret-down"></i>';
    for(let i =0 ; i<res.data.length ; i++){


        let rank = res.data[i].rank
        let symbol = res.data[i].symbol
        let name = res.data[i].name
        let price_usd = res.data[i].price_usd
        let market_cap_usd = res.data[i].market_cap_usd
        let percent_change_1h = res.data[i].percent_change_1h
        let percent_change_24h = res.data[i].percent_change_24h
        let percent_change_7d = res.data[i].percent_change_7d
        let volume24 = res.data[i].volume24


        if(percent_change_1h < 0){
            colorH1 ='red'
            percent_change_1h = iconDown + percent_change_1h
        }else if(percent_change_1h > 0){
            colorH1 = 'green'
            percent_change_1h = iconUp +  percent_change_1h 
        }else{
            colorH1 = 'black'
        }

        
        if(percent_change_24h < 0){
            color24 ='red';
            percent_change_24h = iconDown + percent_change_24h
        }else if(percent_change_24h > 0){
            color24 = 'green';
            percent_change_24h = iconUp + percent_change_24h
        }else{
            color24 = 'black'
        }

        
        if(percent_change_7d < 0){
            colorWeekly ='red';
            percent_change_7d = iconDown + percent_change_7d;
        }else if(percent_change_7d > 0){
            colorWeekly = 'green';
            percent_change_7d = iconUp + percent_change_7d;
        }else{
            colorWeekly = 'black'
        }

        holder.innerHTML += 
      
      '<div class="top-holder py-[20px]  border-b w-full flex my-auto   capitalize py-10 bg-white p-2">'+
            '<div class="rank ">'+
             ' <h1 class="titlespara">'+rank+'</h1>'+
          '  </div>'+
            '<div class="icon flex gap-5 namesheader mx-3">'+
                '<img src="https://www.coinlore.com/img/50x50/'+res.data[i].nameid+'.png" style="width:30px;height:25px" class="">'+
              '<div class="right">'+
               ' <h1>'+symbol+'</h1>'+
                '<h1 class="font-bold">'+name+'</h1>'+
              '</div>'+
           ' </div>'+
          ' <div class="flex mx-10">'+
           ' <div class="price namesheader">'+
                '<h1 class="flex"><b>$</b>'+price_usd+'</h1>'+
             ' </div>'+
              '<div class="market">'+
              '  <h1 class="titlespara flex"><b>$</b>'+market_cap_usd+'</h1>'+
             ' </div>'+
             ' <div class="min-time-change">'+
              '  <h1 style="color:'+color24+' " class="titlespara">'+percent_change_1h+'</h1>'+
              '</div>'+
              '<div class="max-time-change">'+
               ' <h1 style="color:'+color24+' " class="titlespara">'+percent_change_24h+'</h1>'+
             ' </div>'+
             ' <div class="max-time-change">'+
             
                '<h1 style="color:'+colorWeekly+'" class="titlespara">'+percent_change_7d+'</h1>'+
             ' </div>'+
              '<div class="max-time-change ">'+
               ' <h1 class="titlespara flex"><b>$</b> '+volume24+'  </h1>'+
              '</div>'+
          ' </div>'+
         ' </div>'
      
       
    };
})


    function getData(){

        p1+=30

        url = 'https://api.coinlore.net/api/tickers/?start='+p1+'&limit=30'

        fetch(url)
        .then(data=>   data.json())
        
        .then(res=>{
        
    
            let colorH1 , color24 , colorWeekly
            let  iconUp = '<i class="fa-sharp fa-solid fa-caret-up"></i>';
            let iconDown = '<i class="fa-sharp fa-solid fa-caret-down"></i>';
            for(let i =0 ; i<res.data.length ; i++){
        
        
                let rank = res.data[i].rank
                let symbol = res.data[i].symbol
                let name = res.data[i].name
                let price_usd = res.data[i].price_usd
                let market_cap_usd = res.data[i].market_cap_usd
                let percent_change_1h = res.data[i].percent_change_1h
                let percent_change_24h = res.data[i].percent_change_24h
                let percent_change_7d = res.data[i].percent_change_7d
                let volume24 = res.data[i].volume24
        
        
                if(percent_change_1h < 0){
                    colorH1 ='red'
                    percent_change_1h = iconDown + percent_change_1h
                }else if(percent_change_1h > 0){
                    colorH1 = 'green'
                    percent_change_1h = iconUp +  percent_change_1h 
                }else{
                    colorH1 = 'black'
                }
        
                
                if(percent_change_24h < 0){
                    color24 ='red';
                    percent_change_24h = iconDown + percent_change_24h
                }else if(percent_change_24h > 0){
                    color24 = 'green';
                    percent_change_24h = iconUp + percent_change_24h
                }else{
                    color24 = 'black'
                }
        
                
                if(percent_change_7d < 0){
                    colorWeekly ='red';
                    percent_change_7d = iconDown + percent_change_7d;
                }else if(percent_change_7d > 0){
                    colorWeekly = 'green';
                    percent_change_7d = iconUp + percent_change_7d;
                }else{
                    colorWeekly = 'black'
                }
        
                holder.innerHTML += 
              
              '<div class="top-holder py-[20px]  border-b w-full flex my-auto   capitalize py-10 bg-white p-2">'+
                    '<div class="rank ">'+
                     ' <h1 class="titlespara">'+rank+'</h1>'+
                  '  </div>'+
                    '<div class="icon flex gap-5 namesheader mx-3">'+
                        '<img src="https://www.coinlore.com/img/50x50/'+res.data[i].nameid+'.png" style="width:30px;height:25px" class="">'+
                      '<div class="right">'+
                       ' <h1>'+symbol+'</h1>'+
                        '<h1 class="font-bold">'+name+'</h1>'+
                      '</div>'+
                   ' </div>'+
                  ' <div class="flex mx-10">'+
                   ' <div class="price namesheader">'+
                        '<h1 class="flex"><b>$</b>'+price_usd+'</h1>'+
                     ' </div>'+
                      '<div class="market">'+
                      '  <h1 class="titlespara flex"><b>$</b>'+market_cap_usd+'</h1>'+
                     ' </div>'+
                     ' <div class="min-time-change">'+
                      '  <h1 style="color:'+color24+' " class="titlespara">'+percent_change_1h+'</h1>'+
                      '</div>'+
                      '<div class="max-time-change">'+
                       ' <h1 style="color:'+color24+' " class="titlespara">'+percent_change_24h+'</h1>'+
                     ' </div>'+
                     ' <div class="max-time-change">'+
                     
                        '<h1 style="color:'+colorWeekly+'" class="titlespara">'+percent_change_7d+'</h1>'+
                     ' </div>'+
                      '<div class="max-time-change ">'+
                       ' <h1 class="titlespara flex"><b>$</b> '+volume24+'  </h1>'+
                      '</div>'+
                  ' </div>'+
                 ' </div>'
              
               
            };
        })
    }