import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ChannelService } from '../channel/services/channel.service';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
    selector: 'app-channel',
    styleUrls: ['./channel.component.css'],
    templateUrl: './channel.component.html'
})
export class ChannelComponent implements OnInit {
    form: FormGroup;
    allSessions: any;
    errorMessage: string = '';

    constructor(public fb: FormBuilder, public cs: ChannelService) { 
    }

    ngOnInit() {
        this.getChannel();
    }

    getChannel() {
        let _that = this;
        this.cs.getData().subscribe(
            result => {
                _that.allSessions = _that.getDateTimeFormat(_that.sortByTime(result));
                console.log(_that.allSessions);
            }
        );
    }

    getDateTimeFormat(initData) {
        let tempCounter = [];
        initData = initData.reduce(function(accum, curr, ind) {
            let day = moment(curr.time).format('ddd, MMMM DD, YYYY').toString();
            let period = moment(curr.time).format('h:mm A [-] ') +
                moment(curr.time).add(1, 'hour').format('h:mm A ') + 'EDT';
                // moment(curr.time).tz('America/New_York').format('z');
                // moment-timezone required for PDT
            /*if(!(day in tempCounter)) tempCounter.push(day);
            let tempIn = tempCounter.indexOf(day);
            console.log(tempIn);
            if(!(tempIn in accum)) accum[tempIn] = [];*/
            curr['day']= day;
            curr['time'] = period;
            accum.push(curr);
            return accum;
        }, []);
        return this.groupByDay(initData);
    }

    groupByDay(data) {
        return _(data)
        .groupBy(x => x.day)
        .map((value, key) => ({day: key, data: value}))
        .value();
    }
    sortByTime(data) {
        return data.sort(function (a, b) {
            let from: any = new Date(a.time);
            let to: any = new Date(b.time);
            return from - to;
        });
    }
}
