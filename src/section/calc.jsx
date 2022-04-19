import { useEffect, useState } from "preact/hooks";

import { NumberInput } from '@mantine/core';
import { RadioGroup, Radio } from '@mantine/core';
import { Button } from '@mantine/core';

import { hitungTotal, formatterMataUang, hitungProfit, gantiCss } from "./calcLogic";

export function Calc() {
    const [aset, setAset] = useState(0);
    const [persentase, setPersentase] = useState(0);
    const [profit, setProfit] = useState(0);
    const [total, setTotal] = useState(0);
    const [matauang, setMatauang] = useState("Rp");
    const [css, setCss] = useState("hasil-up");

    const reset = () => {
        setAset(0)
        setPersentase(0)
    }

    useEffect(() => {
        setProfit(hitungProfit(aset, persentase));
    }, [aset, persentase]);

    useEffect(() => {
        setCss(gantiCss(profit));
        setTotal(hitungTotal(aset, profit));
    }, [aset, profit]);

    return (
        <div class="row row-col row-gap-2">
            <div class="row row-col-md row-gap-3">
                <div>
                    <NumberInput
                        label="Nilai Aset:"
                        placeholder="Nilai Aset Anda"
                        size="md"
                        value={aset}
                        min={0}
                        max={100000000000}
                        icon={matauang}
                        onChange={(nilai) => !nilai ? setAset(0) : setAset(nilai)}
                    />
                    <RadioGroup
                        className="radioopt"
                        defaultValue="Rp"
                        onChange={setMatauang}
                    >
                        <Radio value="Rp" label="Rupiah" />
                        <Radio value="$" label="US Dollar" />
                    </RadioGroup>
                </div>
                <div>
                    <NumberInput
                        label="Profit/Loss"
                        size="md"
                        value={persentase}
                        min={-100000}
                        max={100000}
                        step={0.1}
                        precision={1}
                        icon={"%"}
                        onChange={(nilai) => !nilai ? setPersentase(0) : setPersentase(nilai)}
                    />
                </div>
                <div>
                    <Button
                        className="reset-button reset-button-md"
                        size="md"
                        radius="md"
                        variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                        uppercase
                        onClick={reset}
                    >
                        Reset
                    </Button>
                </div>
            </div>
            <div class={`hasil ${css}`}>
                {formatterMataUang(aset, matauang)} + {formatterMataUang(profit, matauang)} = {formatterMataUang(total, matauang)}
            </div>
        </div>
    )
}
