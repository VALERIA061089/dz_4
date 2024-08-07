export function celsiusToFahrenheit(cel) {
    const w = 1.8;
    const b = 32;
    const far = cel * w + b;
    alert (`Температура по Фаренгейту равна ${far}`);
    console.log(far);
    return far;
  };

