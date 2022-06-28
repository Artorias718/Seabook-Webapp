package com.example.seabook_mobileapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Activity3 extends AppCompatActivity {

    private Button buttonMain2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_3);

        buttonMain2 = (Button) findViewById(R.id.buttonMain2);
        buttonMain2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openActivity4();
            }
        });
    }

    public void openActivity4() {
        Intent intent;
        intent = new Intent(Activity3.this,
                Activity4.class);
        startActivity(intent);
    }
}