function SectionTitle({title, subtitle}) {


return (

<div className="text-center mb-10">


<h2 className="text-3xl md:text-4xl font-bold text-green-700">

{title}

</h2>


<p className="mt-3 text-gray-600">

{subtitle}

</p>


</div>

)


}


export default SectionTitle