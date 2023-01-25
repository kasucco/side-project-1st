// import {useRef, ChangeEvent,Dispatch, SetStateAction} from "react"
// type ReturnTypes<T> = [
//     T,
//     (e: ChangeEvent<HTMLInputElement>) => void,
//     Dispatch<SetStateAction<T>>
//   ];

// export default function useIntersectionObserver <T,>(callback: T): ReturnTypes<T>{
//     const observer = useRef(
//         new IntersectionObserver(
//             (entries, observer)=>{
//                 entries.forEach((entry)=>{
//                     if(entry.isIntersecting){
//                         callback();
//                     }
//                 })
//             }
//             {threshold:1}
//         )
//     )

//     const observe = (Element) =>{
//         observer.current.observe(Element);
//     }

//     const unobserve = (Element) => {
//         observer.current.unobserve(Element);
//     }

//     return [observe, unobserve]
// }

const InfiniteScroll = () => {
  return;
};

export default InfiniteScroll;
