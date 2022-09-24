import Star from "./Star"




const createArray = length => [...Array(length)]

const StarRating = ({ selectedStars = 0, totalStars = 5, onRate = f => f }) => {





    return (
        <div >
            {
                createArray(totalStars).map((n, i) => (
                    <Star key={i}
                        selected={selectedStars > i}
                        onSelect={() => onRate(i + 1)}
                    />
                )
                )
            }

            <p>
                {selectedStars} of {totalStars} stars!

            </p>

        </div>
    )
}




export default StarRating;

// const StarRating = ({ selectedStars = 0, totalStars = 5 }) => {

//     const [selectedStars, setSelectedStars] = useState(ratingStars)
//     console.log(props)


//     return (
//         <div style={{ padding: '5px', ...style }}{...props}>
//             {
//                 createArray(totalStars).map((n, i) => (
//                     <Star key={i}
//                         selected={selectedStars > i}
//                         onSelect={() => setSelectedStars(i + 1)} />
//                 )
//                 )
//             }

//             <p>
//                 {selectedStars} of {totalStars} stars!

//             </p>

//         </div>
//     )
// }