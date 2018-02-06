import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
    private timeTableUrl = 'http://gyromouse.net/weboldal/konferenciapi/timetable.php';
    private gameUrl = 'http://gyromouse.net/weboldal/konferenciapi/game.php';
    private questionUrl = 'http://gyromouse.net/weboldal/konferenciapi/question.php';
    private standUrl = 'http://gyromouse.net/weboldal/konferenciapi/stand.php';

    constructor(private http: Http) { }

    getTimeTable(): Promise<any> {
        return this.http.get(this.timeTableUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getStandData(): Promise<any> {
        return this.http.get(this.standUrl)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getProgram(id: number): Promise<any> {
        const url = this.timeTableUrl + "?id=" + id;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    setGameQR(sid: string, name: string, email: string): Promise<any> {
        const url = this.gameUrl + "?id=" + sid + "&name=" + name + "&email=" + email;
        return this.http.get(url)
        .toPromise()
        .then()
        .catch(this.handleError);
    }

    setQuestion(pid: string, name: string, question: string): Promise<any> {
        const url = this.questionUrl + "?pid=" + pid + "&name=" + name + "&question=" + question;
        return this.http.get(url)
        .toPromise()
        .then()
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
