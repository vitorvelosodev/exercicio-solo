let length = 0, verif = true, arr = ["un","iq","ue"];
    for (let i = 0; i < arr.length; i += 1) { // First element of concat array
        let concat = [arr[i]];
        for (let j = 0; j < arr.length; j += 1) { // Adding other elem. to concat and check them
            if (j == i) { // avoid same element twice
                j += 1;
            }
            if (j < arr.length) {
                concat.push(arr[j]);
                verif = true;
            
                for (let k = 0; k < concat.length; k += 1) { // words inside concat
                    for (let l = 0; l < concat[k].length; l += 1) { // chars of words i
                        for (let m = 0; m < concat.length; m += 1) { // words inside concat to verify
                            if (k == m){
                                m += 1;
                            }
                            if (m < concat.length){
                                for (let n = 0; n < concat[m].length; n += 1) { // chars inside word m
                                    if (concat[k][l] == concat[m][n]) {
                                        verif = false;
                                        break;
                                    }
                                }
                            }
                            if (verif == false) {
                                if (concat[k].length > concat[m].length) {
                                    concat.splice(m,1);
                                    break;
                                } else {
                                    concat.splice(k,1);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (length < concat.length) {
            length = concat.length;
        }                
    }
    return length;