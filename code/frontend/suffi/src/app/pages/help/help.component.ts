import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataServiceService, Challenge } from '../../services/data-service.service'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  public help: any;

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataServiceService
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');

    this.help = '<h1>Lebensmittel</h1>'+
      '<h2>Regional und Lokal einkaufen</h2><p>Nicht-saisonale Produkte haben entweder einen langen Transportweg oder sie werden in beheizten Gewächshäusern angebaut. Eingeflogene Produkte belasten die Umwelt viel stärker, da der Ausstoss von Treibhausgasen beim Transport in der Luft eine grössere und länger anhaltende Wirkung entfaltet.</p><h2>Milchprodukte</h2><p>Der Konsum von Milchprodukten und Eiern beeinflusst Ihren ökologischen Fussabdruck beträchtlich. Die Produktion von Milch und Eiern ist für etwa 20 Prozent der ernährungsbedingten Umweltbelastung des Durchschnittschweizers verantwortlich.</p><h2>Eier</h2><p>Der Konsum von Milchprodukten und Eiern beeinflusst Ihren ökologischen Fussabdruck beträchtlich. Die Produktion von Milch und Eiern ist für etwa 20 Prozent der ernährungsbedingten Umweltbelastung des Durchschnittschweizers verantwortlich.</p><h2>Fleisch und Fisch</h2><p>Ein vegetarisches Gericht belastet die Umwelt etwa drei Mal weniger als ein Gericht mit Fleisch. Allein die Produktion von einem Kilogramm Fleisch verbraucht 5 bis 20 Kilogramm Futter und dementsprechend ein Mehrfaches an Fläche und Energie im Vergleich zu pflanzlichen Produkten.</p><h2>Label Produkte</h2><p>Der biologische Landbau fördert die natürliche Vielfalt von Tieren und Pflanzen und die langfristige Bodenfruchtbarkeit. Dies geschieht indem natürliche Kreisläufe gefördert werden und auf chemisch-synthetische Dünge- und Pflanzenschutzmittel verzichtet wird. Weil dieser Rechner jedoch nur Umweltwirkungen in CO2 aufzeigt, schneidet Bio hier nur leicht besser ab als die konventionelle Produktion.</p><h2>Lebensmittel wegwerfen</h2><p>In der Schweiz entsteht pro Jahr rund zwei Millionen Tonnen vermeidbarer Lebensmittelmüll – ein Drittel der für die Schweiz produzierten Nahrungsmittel. Am meisten Lebensmittel werden in Haushalten weggeworfen. Ein achtungsvoller/bewusster Umgang mit Nahrungsmitteln kann daher die Umweltbelastung stark senken.</p><h2>Autofahren und Motorradfahren</h2><p>Der private Verkehr beinhaltet alle Reisetätigkeiten ausserhalb der Arbeitszeiten, beispielsweise den Arbeitsweg oder Ausflüge. Gemeint ist die Gesamtdistanz, die Sie im Auto zurücklegen – auch als Beifahrer/-in oder im Taxi, falls Sie kein Auto besitzen.Beispiel: Ein täglicher Arbeitsweg von 30 Minuten oder etwa 20 km (10 km hin und 10 km zurück) entspricht 4700 km jährlich. Ein Arbeitsweg von zwei Stunden oder etwa 100 km (50 km hin und 50 km zurück) täglich entspricht 23\'500 km jährlich.</p><h2>Flugreisen</h2><p>Beispiel: Wenn Sie vor drei Jahren zehn Stunden geflogen sind, in den anderen vier Jahren aber nie, dann sind Sie durchschnittlich zwei Stunden pro Jahr geflogen.Fliegen ist – bezogen auf die Treibhauswirksamkeit – die schädlichste Tätigkeit, welche Sie ausüben können. Ein Flug von Zürich nach Neuseeland und zurück verursacht pro Person neun Tonnen CO2-Äquivalente. In der Schweiz braucht eine Einzelperson im durchschnitt acht Monate, um dieselbe Menge an Treibhausgasen zu verursachen.</p><h2>Wohnen</h2><p>Bei Neubauten lohnt es sich zu prüfen, ob es möglich wäre, das gesamte Gebäude nur mit Solarpanels zu beheizen. Notwendig dafür wäre eine sehr gute Wärmedämmung, eine gute Lage des Gebäudes und ein sehr grosser Wassertank. In bestehenden Häusern sind Wärmepumpen (idealerweise sole-wasser), betrieben mit Ökostrom (aus Wasser, Wind und Solarenergie) sowie Holzheizungen die klimaschonendsten Heizungssysteme. Bei Holzheizungen sollte der Rauch bzw. die Abgase mit gut gewarteten Filteranlagen gereinigt werden.</p><h2>Kleider und Schuhe</h2><p>Geben Sie Ihre persönliche Ausgaben oder, falls Sie auch für andere Haushaltsmitglieder Kleider und Schuhe einkaufen, den Durchschnitt der Ausgaben an.Die Produktion von Kleidern und Schuhen ist energie- und arbeitsintensiv. Für die Herstellung einer Jeans wird beispielsweise 10\'000 Liter Wasser verbraucht. Der Grossteil davon benötigen die Baumwollplantagen, welche sich ausschliesslich in trockenen Weltregionen befinden.</p>';
  }

}
