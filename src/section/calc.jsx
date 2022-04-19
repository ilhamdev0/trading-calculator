import { useEffect, useState } from "preact/hooks";

import InputNumber from 'rsuite/InputNumber';
import Radio from 'rsuite/Radio';
import RadioGroup from 'rsuite/RadioGroup';
import Message from 'rsuite/Message';

import { hitungTotal, formatterMataUang, hitungProfit, gantiCss } from "./calcLogic";

export function Calc() {
    const [aset, setAset] = useState(0);
    const [persentase, setPersentase] = useState(0);
    const [profit, setProfit] = useState(0);
    const [total, setTotal] = useState(0);
    const [matauang, setMatauang] = useState("Rp");
    const [css, setCss] = useState("hasil-up");

    useEffect(() => {
        setProfit(hitungProfit(aset, persentase));
    }, [aset, persentase]);

    useEffect(() => {
        setCss(gantiCss(profit));
        setTotal(hitungTotal(aset, profit));
    }, [aset, profit]);

    return (
        <div class="row row-col row-gap-2">
            <div class="row row-col-md row-gap-2">
                <div>
                    <p class="label">Nilai Aset:</p>
                    <InputNumber prefix={matauang} min={0} max={100000000000} defaultValue={0} onChange={setAset} />
                    <RadioGroup name="matauang" defaultValue="Rp" onChange={setMatauang} inline>
                        <Radio value="Rp">Rupiah</Radio>
                        <Radio value="USD">US Dollar</Radio>
                    </RadioGroup>
                </div>
                <div>
                    <p class="label">Profit/Loss:</p>
                    <InputNumber postfix="%" min={-100000} max={100000} defaultValue={0} step={0.1} onChange={setPersentase} />
                </div>
            </div>
            <div>
                <Message className={css} type="info">
                    {formatterMataUang(aset, matauang)} + {formatterMataUang(profit, matauang)} &#8594; {formatterMataUang(total, matauang)}
                </Message>
            </div>
        </div>
    )
}
