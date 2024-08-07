export function calculateFallDistance(time) {
    const g = 9.8;
    const d = (1/2) * g * time^2;
    alert(`Расстояние, которое пролетел объект равно ${d}`);
    return;
}