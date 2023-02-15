
function deleteProduct (product){
   console.log (product.id) 
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`/products/editProduct/delete/${product.id}`, {
                method: "POST"
            })
            .then((deletedProduct) => {
                console.log (deletedProduct) 
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            })
            location.reload()
        }
      })
}
