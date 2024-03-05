function solution(estudiantes, deathCount, nuevo) {

  if (deathCount === 0) {
    console.log( estudiantes.push(nuevo));
  }
  
    while (deathCount > 0) {
        if (deathCount === 0) {
            console.log( estudiantes.push(nuevo));
          }
      estudiantes.pop()
      deathCount--;
    }
    estudiantes.push(nuevo);
    console.log( estudiantes);
  
}
solution(["nico","zule"],0,"santi");
solution(["juan","juanita","daniela"],1,"julian");
solution(["nath","luisa","noru"],2,"cami");