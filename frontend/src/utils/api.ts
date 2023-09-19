import { ComputingConeFormData } from "../components/SubmitForm/SubmitForm";

abstract class Api {
    private static url = 'http://localhost:3000';
    static computeCone = async ({
        coneHeight,
        radius,
        numberOfSegments,
    }: ComputingConeFormData) => {
        try {
            console.log(`${this.url}/compute-cone`);
            const response = await fetch(`${this.url}/compute-cone`, {
                method: "POST",
                headers: {
                    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    coneHeight,
                    radius,
                    numberOfSegments,
                }),
            });

            if (response.ok) {
                const [ points, indices, magnitudes] = JSON.parse((await response.json()).data);
                console.log(points, indices, magnitudes);
                return [points,indices, magnitudes];

            } else {
                console.log(response.status);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
}

export default Api;