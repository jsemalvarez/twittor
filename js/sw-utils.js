

function actualizaChacheDinamico( dynamicCahce, req, res ){

    if( res.ok ){

        caches.open( dynamicCahce )
            .then( cache => {
                cache.put ( req, res.clone() )
                return res.clone()
            })

    }else{
        //si entramos aca, es que fallo internet y fallo el cache
        return res
    }
}