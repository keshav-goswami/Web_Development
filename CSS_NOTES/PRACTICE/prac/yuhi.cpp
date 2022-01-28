#include <iostream>
using namespace std;

int main() {
	int t;
	cin>>t;
	while(t--){
	    long long int n,k;
	    cin>>n>>k;
	    long long int a[n];
	    for(int i=0;i<n;i++){
	        cin>>a[i];
	    }
	    long long int sum[32] = {0};
	    for(int i=0;i<n;i++){
	        int x = a[i];
	        int j=31;
	        while(x>0){
	            sum[j] += x%2;
	            j--;
	            x = x/2;
	        }
	    }
	    int s=0;
	    for(int i=0;i<32;i++){
	        if(sum[i]%k == 0){
	            s += sum[i]/k;
	        }
	        else{
	            s += sum[i]/k +1;
	        }
	    }
	    cout<<s;
	}
	return 0;
}
