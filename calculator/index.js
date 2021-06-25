$(document).ready(function () {

   $('.btn').click(function() {
           $('.display').val ($('.display').val () + $(this).val())
   })

   $('.clear').click(function() {
       $('.display').val('')
   })

   $('.final').click(function() {
       $('.display').val(eval($('.display').val()))
   })

   $('.back').click(function() {
       $('.display').val ($('.display').val().slice(0, -1))
   })
})