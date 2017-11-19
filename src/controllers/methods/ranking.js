export default function ranking(data) {
  return data.sort((a,b)=>{
        if(b.wins != a.wins){
            return b.wins - a.wins
        } else {
            return a.rounds - b.rounds 
        }
    })
}